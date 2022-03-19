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
    height: (3 / 4) * dimensions.height,
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
