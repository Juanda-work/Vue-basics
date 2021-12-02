//Necesarios para usar el componente Counter
import {shallowMount, mount} from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {
    // test('debe de hacer match con el snapshot', () => {
    //     //wrapper : nombre estandar
    //     const wrapper = shallowMount(Counter)
    //     expect( wrapper.html() ).toMatchSnapshot()
    // })
    // El comando npm para que actualice el snapshot es: npm run test:unit -- -u

    test('H2 debe tener valor por defecto', () => {
        const wrapper = shallowMount( Counter )
        
        // .toBe(true) == toBetruthy()
        expect( wrapper.find('h2').exists() ).toBeTruthy()

        const h2 = wrapper.find('h2').text()
        expect( h2  ).toBe('Counter')
    })

    test('el valor por defecto debe ser 100 en el p', () =>{
        //Wrapper
        const wrapper = shallowMount( Counter )

        //buscar parrafos
        let parrafo = wrapper.find("[data-testid='counter']")
        expect( parrafo.exists() ).toBe(true)

        //expect segundo p tenga valor 100
        expect( parrafo.text() ).toEqual("100")
    })

    
})