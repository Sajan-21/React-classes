const withUpperCase = (WrappedComponent) => {
    console.log("WrappedComponent : ",WrappedComponent);
    return function ({ text, ...restProps }) {
        console.log("text inside the return function : ",text)
        const upperCaseText = text.toUpperCase();

        return <WrappedComponent {...restProps} text={upperCaseText} />
    }
}

//component
const MyComponent = ({ text }) => <div>{text}</div>


//usage of HOC
const MyComponentWithUpperCase = withUpperCase(MyComponent);
console.log("MyComponentWithUpperCase : ",MyComponentWithUpperCase);

export default MyComponentWithUpperCase;