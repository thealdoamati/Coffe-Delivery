import { useForm } from 'react-hook-form'
import {
  CartContainer,
  FormSection,
  PaymentSection,
  SelectedCoffeesSection,
  AddressInput,
  PaymentButton,
  SummaryContainer,
  SummaryItem,
  ConfirmButton,
  FormStyle,
} from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CoffeOnCartCard } from '../../components/CoffeOnCartCard'

const addressFormValidationSchema = zod.object({
  CEP: zod.number().lt(8),
  Rua: zod.string().min(1, 'Informe a sua rua'),
  Número: zod.number().min(1),
  Complemento: zod.string().min(1, 'Apartamento, bloco...'),
  Bairro: zod.string().min(1, 'Informe o seu bairro.'),
  Cidade: zod.string().min(1, 'Informe a sua cidade.'),
  PaymentType: zod.string().min(1),
  TotalPrice: zod.number().min(1),
})

type AddressFormData = zod.infer<typeof addressFormValidationSchema>

export function Cart() {
  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
  })

  const { selectedCoffes } = useContext(CartContext)

  console.log('selectedCoffes', selectedCoffes)

  const { handleSubmit, watch, reset } = addressForm

  function handleBuyCoffe(data: AddressFormData) {}

  return (
    <CartContainer>
      <FormStyle onSubmit={handleSubmit(handleBuyCoffe)}>
        <FormSection>
          <h2>Complete seu pedido</h2>
          <div>
            <div>
              <h3>Endereço de Entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
            <div>
              <AddressInput id="cep" type="number" placeholder="CEP" />
              <AddressInput id="rua" type="text" placeholder="Rua" />
              <div>
                <AddressInput id="numero" type="number" placeholder="Número" />
                <AddressInput
                  id="complemento"
                  type="text"
                  placeholder="Complemento"
                />
              </div>
              <div>
                <AddressInput id="bairro" type="text" placeholder="Bairro" />
                <AddressInput id="cidade" type="text" placeholder="Cidade" />
                <AddressInput id="uf" type="text" placeholder="UF" />
              </div>
            </div>
          </div>
          <PaymentSection>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
            <div>
              <PaymentButton type="button">Cartão de crédito</PaymentButton>
              <PaymentButton type="button">Cartão de débito</PaymentButton>
              <PaymentButton type="button">Dinheiro</PaymentButton>
            </div>
          </PaymentSection>
        </FormSection>
        <SelectedCoffeesSection>
          <h2>Cafés selecionados</h2>
          {selectedCoffes?.map((coffeCart) => {
            return <CoffeOnCartCard key={coffeCart.id} coffeCart={coffeCart} />
          })}
          <SummaryContainer>
            <SummaryItem>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </SummaryItem>
            <SummaryItem>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </SummaryItem>
            <SummaryItem>
              <p>Total</p>
              <span>R$ 33,20</span>
            </SummaryItem>
            <ConfirmButton type="submit">Confirmar pedido</ConfirmButton>
          </SummaryContainer>
        </SelectedCoffeesSection>
      </FormStyle>
    </CartContainer>
  )
}
