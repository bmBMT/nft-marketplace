export default {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? undefined : isSelected ? '#A259FF' : isFocused,
      color: isDisabled ? '#ccc' : '#2b2b2b',
      cursor: isDisabled ? 'not-allowed' : 'default',
    }
  },
}