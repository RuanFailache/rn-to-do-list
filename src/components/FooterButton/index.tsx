import React from 'react'
import { KeyboardAvoidingView, Text, TouchableOpacity } from 'react-native'
import { footerButtonStyle } from '../../utils/styles'

type FooterButtonProps = {
  openModal: () => void
}

export const FooterButton: React.FC<FooterButtonProps> = function ({
  openModal,
}) {
  return (
    <KeyboardAvoidingView>
      <TouchableOpacity style={footerButtonStyle.button} onPress={openModal}>
        <Text style={footerButtonStyle.buttonText}>+</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}
