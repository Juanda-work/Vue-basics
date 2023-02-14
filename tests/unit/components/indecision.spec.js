import { shallowMount } from "@vue/test-utils";
import Indecision  from "@/components/Indecision"

describe('Componente Indecision', () => {
    let wrapper;
    let clgSpy;
    // Implementación de un mock de 'fetch' porque en Node no está esa función.
    global.fetch = jest.fn( () => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image : 'https://yesno.wtf/assets/yes/2.gif'
        })
    }))

    beforeEach( () => {
        wrapper = shallowMount(Indecision)
        clgSpy = jest.spyOn(console, 'log')
        /*Esto sirve para que no cuente las simulaciones de otras pruebas */
        jest.clearAllMocks() 
    })



    test('Debe hacer match con el snapshot', () =>{
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('escribir en el input no debe disparar nada (console.log)', async ()=>{
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )
        const input = wrapper.find('input')
        /* al hacer cambios en el DOM, hay que usar async-await */
        await input.setValue('Hola Mundo')
        expect(clgSpy).toHaveBeenCalled()
        // expect(getAnswerSpy).not.toHaveBeenCalled()
    })

    test('escribir ? dispara el getAnswer', async ()=>{
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )
        const input = wrapper.find('input')
        await input.setValue("?")
        
        expect(clgSpy).toHaveBeenCalledTimes(2)
        expect(getAnswerSpy).toHaveBeenCalled()

    })

    test('pruebas en getAnswer', async ()=>{
        await wrapper.vm.getAnswer()

        // console.log(wrapper.vm.image);
        // console.log(wrapper.vm.answer);

        const img = wrapper.find('img')
        console.log(img.exists());
        expect( img.exists() ).toBeTruthy()
        expect( wrapper.vm.img ).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect( wrapper.vm.answer ).toBe('Si!')
    })

    test('pruebas en getAnswer - Fallo en el API', async()=>{
        // Simulamos fallo del api:
        fetch.mockImplementationOnce( () => Promise.reject('API IS NOT WORKING PROPERLY') )

        await wrapper.vm.getAnswer()
        const img = wrapper.find('img')
        expect( img.exists() ).toBeFalsy()
        expect( wrapper.vm.answer ).toBe('No se pudo cargar del API')
    })
    
})