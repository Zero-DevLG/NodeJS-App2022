
const fs = require('fs');
const colors = require('colors/safe');
const createFile = async( base,l,j ) => {
    
    try{
        var data = '';
    
            for(let i=1;i<=j;i++)
        {
            data += `${base} x ${i} = ${ base * i }\n`;
        }
    if(l){
        console.log(colors.yellow('============================================'));
        console.log(colors.bgCyan(`   Tabla del ${base}   `));
        console.log(colors.yellow('============================================'));
        console.log(colors.magenta(data));
    }
        
    
        fs.writeFileSync(`C:/Users/LGZero/Documents/Proyectos/NodeJS/Curso_Node/Bases-Node/file-data/tabla-${base}.txt`,data);
        return(`tabla-${ base }.txt creado`);
    }catch(err){
        throw err;
    }
    
   
}

module.exports = {
    createFile: createFile 
}