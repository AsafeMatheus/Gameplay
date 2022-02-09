import React, {ReactNode} from "react"
import { 
    Modal, 
    View, 
    ModalProps, 
    TouchableWithoutFeedback
} from "react-native"

import { BackGround } from "../Background"

import { styles } from './styles'

type Props = ModalProps & {
    children: ReactNode,
    closeModal: () => void
}

export function ModalView({closeModal, children, ...rest} : Props){
    return(
        <Modal
            transparent
            animationType='slide'
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <BackGround>
                            <View style={styles.bar} />
                            {children}
                        </BackGround>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}