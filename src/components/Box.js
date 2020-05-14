
import {View} from 'react-native';
import styled from 'styled-components'
import {compose, color, size, flexbox} from 'styled-system'

const Box = styled(View)(
    compose(
        flexbox,
        color,
        size
    ),
);
export default Box;
