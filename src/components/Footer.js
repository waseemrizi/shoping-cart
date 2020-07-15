import React from 'react';
import StickyFooter from 'react-sticky-footer';

function Footer() {
    return (
    
    <div>
        <StickyFooter
    bottomThreshold={50}
    normalStyles={{
    backgroundColor: "#3F51B5",
    padding: "1.5rem"
    }}
    stickyStyles={{
    backgroundColor: "rgba(255,255,255,.8)",
    padding: "2rem"
    }}
>
    Developed By Waseem
</StickyFooter>

    </div>
    
    
    );
}

export default Footer
