//Necesarios para usar el componente Counter
import {shallowMount, mount} from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {
    test('debe de hacer match con el snapshot', () => {
        //wrapper : nombre estandar
        const wrapper = shallowMount(Counter)
        expect( wrapper.html() ).toMatchSnapshot()
    })
    
})