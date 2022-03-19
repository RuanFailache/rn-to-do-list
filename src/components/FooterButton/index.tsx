import React from 'react'
import { KeyboardAvoidingView, Text, TouchableOpacity } from 'react-native'
import { footerButtonStyle } from '../../utils'

export const FooterButton: React.FC = function () {
  return (
    <KeyboardAvoidingView>
      <TouchableOpacity style={footerButtonStyle.button}>
        <Text style={footerButtonStyle.buttonText}>+</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}
