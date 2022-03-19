import { Dimensions, StyleSheet } from 'react-native'
import { theme } from '../theme'

const dimensions = Dimensions.get('window')

export const appStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export const toDoListStyle = StyleSheet.create({
  listContainer: {
    marginTop: theme.sizes.lg,
  },
  emptyListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: dimensions.height - theme.sizes.lg,
    width: dimensions.width,
  },
  text: {
    fontSize: theme.fontSizes.sm,
  },
  divider: {
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: 1,
  },
  task: {
    paddingVertical: theme.sizes.sm,
    paddingHorizontal: theme.sizes.md,
  },
})

export const footerButtonStyle = StyleSheet.create({
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

export const headerStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: dimensions.width,
    height: theme.sizes.lg,
    backgroundColor: theme.colors.black,
    zIndex: 1,
    shadowOpacity: 1,
  },
  title: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.white,
  },
})
