import { useForm } from 'react-hook-form'
import { CartContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

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
      <form>
        <div>
          <h2>Complete seu pedido</h2>
          <div>
            <div>
              <h3>Endereço de Entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
            <div>
              <input id="cep" type="number" placeholder="CEP" />
              <input id="rua" type="text" placeholder="Rua" />
              <div>
                <input
                  id="numero"
                  type="number"
                  placeholder="Número (Opcional)"
                />
                <input
                  id="complemento"
                  type="text"
                  placeholder="Complemento (Opcional)"
                />
              </div>
              <div>
                <input id="bairro" type="text" placeholder="Bairro" />
                <input id="cidade" type="text" placeholder="Cidade" />
                <input id="uf" type="text" placeholder="UF" />
              </div>
            </div>
          </div>
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
            <button>Cartão de crédito</button>
            <button>Cartão de débito</button>
            <button>Dinheiro</button>
          </div>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <div>
            <div>
              <div>
                <img src="" alt="" />
                <h3>Expresso Tradicional</h3>
                <div>
                  <div>
                    <span>R$</span> R$ 19,80
                  </div>
                  <div>
                    <div>
                      <button>-</button>
                      <div>0</div>
                      <button>+</button>
                    </div>
                    <button>
                      <Trash size={24} weight="fill" />
                      Remover
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p>Total de itens</p>
                  <span>R$ 29,70</span>
                </div>
                <div>
                  <p>Entrega</p>
                  <span>R$ 3,50</span>
                </div>
                <div>
                  <p>Total</p>
                  <span>R$ 33,20</span>
                </div>
                <button>Confirmar pedido</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </CartContainer>
  )
}
