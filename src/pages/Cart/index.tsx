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
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { CoffeOnCartCard } from '../../components/CoffeOnCartCard'

const addressFormValidationSchema = z.object({
  CEP: z.string(),
  Rua: z.string().min(1, 'Informe a sua rua'),
  Número: z.number().min(1, 'Informe um número válido'),
  Complemento: z
    .string()
    .min(1, 'Apartamento, bloco...')
    .optional()
    .or(z.literal('')),
  Bairro: z.string().min(1, 'Informe o seu bairro.'),
  Cidade: z.string().min(1, 'Informe a sua cidade.'),
  UF: z.string().min(1, 'Unidade federal'),
  PaymentType: z.enum(['Cartão de crédito', 'Cartão de débito', 'Dinheiro'], {
    invalid_type_error: 'Selecione um meio de pagamento',
  }),
})

export type AddressFormData = z.infer<typeof addressFormValidationSchema>

export function Cart() {
  const [totalValue, setTotalValue] = useState(0)
  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
  })
  const frete = 3.5

  const { selectedCoffes, sumOfPricesOfCoffesOnCart, checkout } =
    useContext(CartContext)

  console.log('selectedCoffes', selectedCoffes)

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = addressForm

  function handlePaymentSelection(
    payment: 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro',
  ) {
    setValue('PaymentType', payment)
  }

  function handleBuyCoffe(data: AddressFormData) {
    if (selectedCoffes?.length === 0) {
      return alert('É preciso ter ao menos um item no carrinho')
    }
    checkout(data)
  }

  useEffect(() => {
    if (sumOfPricesOfCoffesOnCart) {
      setTotalValue(sumOfPricesOfCoffesOnCart + frete)
    } else {
      setTotalValue(0)
    }
  }, [sumOfPricesOfCoffesOnCart])

  return (
    <CartContainer>
      <FormStyle onSubmit={handleSubmit(handleBuyCoffe)}>
        <FormSection {...addressForm}>
          <h2>Complete seu pedido</h2>
          <div>
            <div>
              <h3>Endereço de Entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
            <div>
              <AddressInput
                id="cep"
                type="text"
                placeholder="CEP"
                {...register('CEP')}
              />
              {errors.CEP && <span>{errors.CEP.message}</span>}
              <AddressInput
                id="rua"
                type="text"
                placeholder="Rua"
                {...register('Rua')}
              />
              {errors.Rua && <span>{errors.Rua.message}</span>}
              <div>
                <AddressInput
                  id="numero"
                  type="number"
                  placeholder="Número"
                  {...register('Número', { valueAsNumber: true })}
                />
                {errors.Número && <span>{errors.Número.message}</span>}
                <AddressInput
                  id="complemento"
                  type="text"
                  placeholder="Complemento"
                  {...register('Complemento')}
                />
                {errors.Complemento && (
                  <span>{errors.Complemento.message}</span>
                )}
              </div>
              <div>
                <AddressInput
                  id="bairro"
                  type="text"
                  placeholder="Bairro"
                  {...register('Bairro')}
                />
                {errors.Bairro && <span>{errors.Bairro.message}</span>}
                <AddressInput
                  id="cidade"
                  type="text"
                  placeholder="Cidade"
                  {...register('Cidade')}
                />
                {errors.Cidade && <span>{errors.Cidade.message}</span>}
                <AddressInput
                  id="uf"
                  type="text"
                  placeholder="UF"
                  {...register('UF')}
                />
                {errors.UF && <span>{errors.UF.message}</span>}
              </div>
            </div>
          </div>
          <PaymentSection>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
            {errors.PaymentType && <span>{errors.PaymentType.message}</span>}
            <div>
              <PaymentButton
                type="button"
                onClick={() => handlePaymentSelection('Cartão de crédito')}
              >
                Cartão de crédito
              </PaymentButton>
              <PaymentButton
                type="button"
                onClick={() => handlePaymentSelection('Cartão de débito')}
              >
                Cartão de débito
              </PaymentButton>
              <PaymentButton
                type="button"
                onClick={() => handlePaymentSelection('Dinheiro')}
              >
                Dinheiro
              </PaymentButton>
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
              <span>
                R${' '}
                {sumOfPricesOfCoffesOnCart
                  ? sumOfPricesOfCoffesOnCart.toFixed(2)
                  : 0}
              </span>
            </SummaryItem>
            <SummaryItem>
              <p>Entrega</p>
              <span>R$ {frete.toFixed(2)}</span>
            </SummaryItem>
            <SummaryItem>
              <p>Total</p>
              <span>R$ {totalValue.toFixed(2)}</span>
            </SummaryItem>
            <ConfirmButton type="submit">Confirmar pedido</ConfirmButton>
          </SummaryContainer>
        </SelectedCoffeesSection>
      </FormStyle>
    </CartContainer>
  )
}
