import { InMemoryCache } from '@apollo/client';

function mergeObjectField(existing: any, incoming: any, field: string) {
  if (existing[field]?.length === 0) {
    return incoming;
  }
  const mergedObjects = [...(existing[field] || []), ...incoming[field]];

  return {
    ...existing,
    ...incoming,
    [field]: mergedObjects,
  };
}

const cache = new InMemoryCache({
  typePolicies: {
    Album: {
      fields: {
        sequencesFeed: {
          keyArgs: ['searchQuery', 'coordinates'],
          merge(existing = [], incoming) {
            // Agrupa os albums no cache para o scroll infinito
            return mergeObjectField(existing, incoming, 'sequences');
          },
        },
        allItems: {
          keyArgs: ['searchQuery', 'coordinates'],
          merge(existing = [], incoming) {
            // Agrupa os albums no cache para o scroll infinito
            return mergeObjectField(existing, incoming, 'feed');
          },
        }
      },
    },
    PhotographerAlbums: {
      fields: {
        feed: {
          // Aqui é necessário manter a array de keyArgs vazia para que o cache atualize corretamente
          keyArgs: [],
          merge(existing = {}, incoming) {
            return mergeObjectField(existing, incoming, 'albums');
          },
        },
      },
    },
    Photographer: {
      fields: {
        notifications: {
          keyArgs: [],
          merge(existing = {}, incoming) {
            console.log("MERGING", existing, incoming)
            return mergeObjectField(existing, incoming, 'feed');
          },
        },
        photos: {
          merge: true,
        },
      },
    },
    UserCarts: {
      fields: {
        active: {
          merge: false,
        },
        purchases: {
          keyArgs: [],
          merge(existing = {}, incoming) {
            console.log("MERGING", existing, incoming)
            return mergeObjectField(existing, incoming, 'carts');
          },
        },
      },
    },
    Surfer: {
      fields: {
        notifications: {
          keyArgs: [],
          merge(existing = {}, incoming) {
            console.log(existing, incoming)
            return mergeObjectField(existing, incoming, 'feed')
          },
        },
        photos: {
          merge: true,
        },
      },
    },
    Photo: {
      fields: {
        file: {
          merge: true,
        },
      },
    },
    Cart: {
      fields: {
        items: {
          merge: false,
        },
      },
    },
    // UserPhotos: {
    //   fields: {
    //     bought: {
    //       merge: false
    //     }
    //   } 
    // },
    ProfileGallerySection: {
      fields: {
        images: {
          merge: false
        },
      },
    },
    Query: {
      fields: {
        customFeed: {
          keyArgs: ['limit'],
          merge(existing = [], incoming) {
            // Agrupa os albums no cache para o scroll infinito
            return mergeObjectField(existing, incoming, 'albums');
          },
        },
        allAlbums: {
          keyArgs: ['searchQuery', 'coordinates', 'limit'],
          merge(existing = [], incoming) {
            // Agrupa os albums no cache para o scroll infinito
            return mergeObjectField(existing, incoming, 'albums');
          },
        },
        user: {
          keyArgs: ['username'],
        },
      },
    },
    ExternalLink: {
      keyFields: ['url'],
    },
  },
});

export default cache;
