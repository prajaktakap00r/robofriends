import React,{Component} from 'react';
import './Hello.css';

class Hello extends Component{
    render(){
        return( 
            <div className='f1 tc'>         {/* font1  and text center , instead of class we use className here , using html in js is known as jsx(used for creating virtual DOM, class is a keyword in js thats why we use className*/}
                <h1>Hello World</h1>
                <p>{this.props.greetings}</p>
            </div>

        )
    }
}
/* const Hello=(props)=>{
    return( 
        <div className='f1 tc'>          Other way of writing the above function
            <h1>Hello World</h1>
            <p>{this.props.greetings}</p>
        </div>
    )
} 
 */
export default Hello;