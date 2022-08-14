export default interface Transaction {
  list: Array<TransactionItems>;
  status: string;
}

export interface TransactionItems {
  id: number;
  date: Date;
  comment: string;
}
