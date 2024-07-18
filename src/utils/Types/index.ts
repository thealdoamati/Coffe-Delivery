export interface AddressFormTypes {
  CEP: string
  Rua: string
  Número: number
  Complemento?: string
  Bairro: string
  Cidade: string
  UF: string
  PaymentType: 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro'
}
