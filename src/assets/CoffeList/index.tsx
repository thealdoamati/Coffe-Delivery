import CoffeIMG1 from '../CoffeImages/Image1.png'

interface Typename {
  typeName: string
}

export interface CoffeType {
  id: string
  image: string
  type: Typename[]
  name: string
  description: string
  price: number
  quantity: number
}

export interface UserAddress {
  CEP: number
  Rua: string
  Número: number
  Complemento: string
  Bairro: string
  Cidade: string
}

export interface UserCartInfo {
  address: UserAddress
  payment: string
  coffes: CoffeType[]
  totalItens: number
  frete: number
  totalPrice: number
}

export const coffeesForSale: CoffeType[] = [
  {
    id: '1',
    image: CoffeIMG1,
    type: [{ typeName: 'Tradicional' }],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantity: 0,
  },
  {
    id: '2',
    image: CoffeIMG1,
    type: [{ typeName: 'Tradicional' }],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    quantity: 0,
  },
  {
    id: '3',
    image: CoffeIMG1,
    type: [{ typeName: 'Tradicional' }],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    quantity: 0,
  },
  {
    id: '4',
    image: CoffeIMG1,
    type: [{ typeName: 'Tradicional' }, { typeName: 'Gelado' }],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    quantity: 0,
  },
  {
    id: '5',
    image: CoffeIMG1,
    type: [{ typeName: 'Tradicional' }, { typeName: 'Com Leite' }],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    quantity: 0,
  },
  {
    id: '6',
    image: CoffeIMG1,
    type: [{ typeName: 'Tradicional' }, { typeName: 'Com Leite' }],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    quantity: 0,
  },
  {
    id: '7',
    image: CoffeIMG1,
    type: [{ typeName: 'Tradicional' }, { typeName: 'Com Leite' }],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    quantity: 0,
  },
  {
    id: '8',
    image: CoffeIMG1,
    type: [{ typeName: 'Tradicional' }, { typeName: 'Com Leite' }],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    quantity: 0,
  },
  {
    id: '9',
    image: CoffeIMG1,
    type: [{ typeName: 'Tradicional' }, { typeName: 'Com Leite' }],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    quantity: 0,
  },
  {
    id: '10',
    image: CoffeIMG1,
    type: [{ typeName: 'Especial' }, { typeName: 'Com Leite' }],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite com café',
    price: 9.9,
    quantity: 0,
  },
  {
    id: '11',
    image: CoffeIMG1,
    type: [
      { typeName: 'Especial' },
      { typeName: 'Alcoólico' },
      { typeName: 'Gelado' },
    ],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    quantity: 0,
  },
  {
    id: '12',
    image: CoffeIMG1,
    type: [{ typeName: 'Especial' }],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    quantity: 0,
  },
  {
    id: '13',
    image: CoffeIMG1,
    type: [{ typeName: 'Especial' }],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    quantity: 0,
  },
  {
    id: '14',
    image: CoffeIMG1,
    type: [{ typeName: 'Especial' }, { typeName: 'Alcoólico' }],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    quantity: 0,
  },
]
