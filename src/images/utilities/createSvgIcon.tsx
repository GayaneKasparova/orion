import styled from 'styled-components'
//import { space } from '@visivoconsulting/mg-components-system/lib/space'
//import { display } from '@visivoconsulting/mg-components-system/lib/layout'
//import { color } from '@visivoconsulting/mg-components-system/lib/color'
//import { compose, system } from '@visivoconsulting/mg-components-system/lib'

/*const size = system({
    size: {
        properties: ['height', 'width'],
        scale: 'components.icon.size',
    },
})*/

export const createSvgIcon = (Component) => {
    const SvgIcon = styled(Component)(
        {
            display: 'inline-block',
            flex: '0 0 auto',
        },
       // compose(size, space, display, color)
    )

    SvgIcon.defaultProps = {
        size: '1em',
        color: 'palette.koala',
    }

    return SvgIcon
}