import { StyleSheet } from 'react-native';
import { colors, fonts, spacing, borders, shadows } from './theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.medium,
    marginTop: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: '600',
    fontFamily: fonts.heading,
    color: colors.primary,
    marginBottom: spacing.small,
    lineHeight: 34,
  },
  subheading: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.secondary,
    marginBottom: spacing.medium,
    lineHeight: 28,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.body,
    color: colors.text,
    lineHeight: 24,
    marginBottom: spacing.small,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.large,
    borderRadius: borders.radiusMedium,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 150,
    ...shadows.medium,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: fonts.body,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: borders.radiusMedium,
    padding: spacing.medium,
    marginVertical: spacing.small,
    ...shadows.light,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.light,
  },
});
