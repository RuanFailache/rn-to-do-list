import { Dimensions, StyleSheet } from 'react-native'
import { theme } from '../theme'

const dimensions = Dimensions.get('window')

export const appStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const radioButton = {
  width: 20,
  height: 20,
  padding: theme.sizes.xxxs,
  borderColor: theme.colors.gray,
  borderWidth: theme.sizes.xxxs,
  borderRadius: 100,
}

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
  title: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
  description: {
    fontSize: theme.fontSizes.sm,
  },
  divider: {
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: 1,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.sizes.sm,
    paddingHorizontal: theme.sizes.md,
  },
  taskButtonNotDone: {
    ...radioButton,
    marginRight: theme.sizes.sm,
  },
  taskButtonDone: {
    ...radioButton,
    marginRight: theme.sizes.sm,
    backgroundColor: theme.colors.green,
  },
  textDone: {
    color: theme.colors.green,
    textDecorationLine: 'line-through',
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

const shadowForModals = {
  shadowColor: theme.colors.black,
  shadowOffset: {
    width: theme.sizes.xs,
    height: theme.sizes.xs,
  },
  shadowOpacity: 1,
  shadowRadius: 40,
}

export const addTaskModalStyle = StyleSheet.create({
  overlay: {
    flex: 1,
  },
  modal: {
    ...shadowForModals,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: dimensions.width,
    padding: theme.sizes.md,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: theme.colors.black,
  },
  title: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.white,
  },
  form: {
    marginTop: theme.sizes.md,
  },
  input: {
    marginBottom: theme.sizes.sm,
    paddingHorizontal: theme.sizes.sm,
    borderColor: theme.colors.white,
    borderWidth: theme.sizes.xxxs,
    borderRadius: 10,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.white,
  },
  button: {
    height: theme.sizes.lg,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 10,
    backgroundColor: theme.colors.green,
  },
  buttonText: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 'bold',
  },
})
