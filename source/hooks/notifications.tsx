// eslint-disable-next-line no-use-before-define
import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import { GET_NOTIFICATIONS } from '@services/query/notifications';
import { useAuth } from './auth';

export interface Notification {
  id: string;
  message: string;
  date: string;
  thumbnail: string;
  target: string;
  read: boolean;
}

interface NotificationContextData {
  notifications: [Notification];
  loading: boolean;
  hasNotificationsUnreaded: boolean;
  reload: any;
  fetchMore: Function;
}

const NotificationContext = createContext<NotificationContextData>(
  {} as NotificationContextData,
);

const notificationCountQuery = gql`
  query GetNotificationsLength {
    self {
      id
      notifications {
        feed {
          id
          read
        }
      }
    }
  }
`;

const NotificationProvider: React.FC = ({ children }) => {
  const { accessToken } = useAuth();

  const [getQuery, { data, loading, fetchMore }] = useLazyQuery(notificationCountQuery);

  const hasNotificationsUnreaded = useMemo(() => {
    return !!data?.self?.notifications.feed.filter(
      (notification: Notification) => !notification.read,
    ).length;
  }, [data?.self?.notifications]);

  useEffect(() => {
    if (accessToken) {
      getQuery();
    }
  }, [accessToken, getQuery]);

  const reload = () => {
    getQuery();
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications: data?.self?.notifications,
        hasNotificationsUnreaded,
        loading,
        reload,
        fetchMore,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

function useNotification(): NotificationContextData {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      ' Notification Notification must be used within an  NotificationProvider',
    );
  }

  return context;
}

export { NotificationProvider, useNotification };
