import React from 'react'
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import { theme } from '../../utils'

export const FooterButton: React.FC = function () {
  return (
    <KeyboardAvoidingView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: theme.sizes.sm,
    right: theme.sizes.sm,
    width: theme.sizes.lg,
    height: theme.sizes.lg,
    borderRadius: 100,
    backgroundColor: theme.colors.green,
  },
  buttonText: {
    fontSize: theme.fontSizes.lg,
    color: theme.colors.white,
  },
})
