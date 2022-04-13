export function getTitleAtStatus(status: string) {
  switch (status) {
    case 'recused':
      return 'Pagamento recusado';
    case 'dead':
      return 'Compra cancelada';
    case 'PENDING_PAYMENT':
      return 'Aguardando pagamento';
    case 'finished':
      return 'Compra concluída';
    case 'FINISHED':
      return 'Compra concluída';
    default:
      return 'nenhuma opção encontrada';
  }
}
