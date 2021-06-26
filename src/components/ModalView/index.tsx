import React, {ReactNode} from "react"
import { Modal, View, ModalProps } from "react-native"

import { BackGround } from "../Background"

import { styles } from './styles'

type Props = ModalProps & {
    children: ReactNode
}

export function ModalView({children, ...rest} : Props){
    return(
        <Modal
            transparent
            animationType='slide'
            {...rest}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <BackGround>
                        <View style={styles.bar} />
                        {children}
                    </BackGround>
                </View>
            </View>
        </Modal>
    )
}