//1. Import Area
// there are two formulas to import
//1 Import  {someNameImport}  from somelocation/somelibaray

    import {B} from './B';

//2 Import  somedefaultImport    from somelocation/somelibaray
    

//2. Functional Defination Area

    // lets create a component  (return some html structure)
    // i can create components two type 1.functional componetn 2.class component

    let A = props =>{ // props are formal argument
        let data1 ='data1';
        console.log(props)
        return  (
                <>  <div>
                      parent {data1} {props.name} {props.surname} {props.children}
                    <div>child</div>
                    </div>
                    <B data3={props.name}></B>
                    
                </>
                )
            }

//3. Export Area
// there are two ways to export 
//3.1 Default export
//3.2 Namedexport

export default A;  // i use here default export method

