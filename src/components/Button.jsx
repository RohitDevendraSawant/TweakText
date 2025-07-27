function Button(props){
    const { isDark, btnText } = props;
    return(
        <>
            <div className={`${isDark ? 'bg-gray-900 hover:bg-gray-950' : 'bg-white hover:scale-90 text-black border border-gray-800'} rounded-xl p-3 text-center`}>
                {btnText}
            </div>
        </>
    );
}

export default Button;