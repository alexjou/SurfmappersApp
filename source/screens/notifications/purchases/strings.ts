export function getTitleAtStatus(status: string) {
  switch (status) {
    case 'recused':
      return 'Pagamento recusado';
    case 'dead':
      return 'Compra cancelada';
    case 'pending_payment':
      return 'Aguardando pagamento';
    case 'finished':
      return 'Compra concluída';
    default:
      return 'nenhuma opção encontrada';
  }
}
