//Necesarios para usar el componente Counter
import {shallowMount, mount} from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {
    let wrapper = shallowMount(Counter);

    // Se llama al beforeEach para que resetee la variable y no se quede con datos
    // almacenados de otras pruebas
    beforeEach( () =>{
        wrapper = shallowMount( Counter )
    })

    // test('debe de hacer match con el snapshot', () => {
    //     //wrapper : nombre estandar
    //     const wrapper = shallowMount(Counter)
    //     expect( wrapper.html() ).toMatchSnapshot()
    // })
    //* El comando npm para que actualice el snapshot es: npm run test:unit -- -u
    

    test('H2 debe tener valor por defecto', () => {
        // .toBe(true) == toBetruthy()
        expect( wrapper.find('h2').exists() ).toBeTruthy() //toBeTruhty = toBe(true)

        const h2 = wrapper.find('h2').text()
        expect( h2 ).toBe('Counter')
    })


    test('el valor por defecto debe ser 100 en el p', () =>{
        //buscar parrafos
        let parrafo = wrapper.find("[data-testid='counter']")
        expect( parrafo.exists() ).toBe(true)

        //expect segundo p tenga valor 100
        expect( parrafo.text() ).toEqual("100")
    })


    test('debe incrementarse en 1', async () =>{
        const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button') //Vienen por orden desc?
        
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        
        const value = wrapper.find("[data-testid='counter']").text()
        expect(value).toBe('101')
    })

    
})