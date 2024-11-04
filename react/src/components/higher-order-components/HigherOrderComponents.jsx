const withUpperCase = (WrappedComponent) => {

    return function ({ text, ...restProps }) {
        const upperCaseText = text.toUpperCase();

        return <WrappedComponent {...restProps} text={upperCaseText} />
    }
}

//component
const MyComponent = ({ text }) => <div>{text}</div>

//usage of HOC
const MyComponentWithUpperCase = withUpperCase(MyComponent);

export default MyComponentWithUpperCase;