export function getTitleAtStatus(status: string) {
  switch (status) {
    case 'finished':
      return 'Venda concluída';
    case 'recused':
      return 'Pagamento recusado';
    case 'dead':
      return 'Compra cancelada';
    case 'pending_payment':
      return 'Aguardando pagamento';
    default:
      return 'nenhuma opção encontrada';
  }
}
