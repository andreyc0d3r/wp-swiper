export default function get_image( tab_image ){
    return (
        <div className='wb-tabs-icon'>
            {'' != tab_image && (
                <img className='wb-tabs-icon_image' src={ tab_image } />
            )}
        </div>
    );
}