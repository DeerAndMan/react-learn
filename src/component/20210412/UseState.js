import React, {useState} from 'react';
import styles from '../../assets/useState.module.css'

/**
 * useState 的基本使用
 */

// function reducer(state, action) {
//     switch(action.type){
//         case 'add':
//             return [...state, action.item];
//         case 'remove':
//             return [
//                 ...state.slice(0, action.index), 
//                 ...state.slice(action.index+1)
//             ]
//         default:
//             throw new Error();
//     }
// }

const FavoriteMovies = () => {
    let movesList = [];
    for (let i = 0; i < 5; i++) {
        movesList.push({name: "heat"+i})
    }

    const [movies, setMovies] = useState( movesList );
    const [newMovie, setNewMovie] = useState("")

    const remove = index => {
        setMovies([...movies.slice(0, index), ...movies.slice(index+1)])
    }
    const add = movie => setMovies([...movies, movie])

    // 展示 Movie 组件
    function Movie({movie, onRemove}){
        return(
            <div className={styles.movie}>
                <span>{movie.name}</span>
                <button onClick={onRemove}>Remove</button>
            </div>
        )
    }
    // 添加电影
    const handleAddClick = () => {
        console.log('newMovie电影名', newMovie);
        if(newMovie === ''){
            return
        }
        add({name: newMovie})
        setNewMovie('')
    }

    return(
        <React.StrictMode>
            <div className='movies'>
                {movies.map((movie, index) => {
                    return <Movie movie={movie} onRemove={() => remove(index)} key={index} />
                })}
            </div>
            <div className="add-movie">
                <input type="text" value={newMovie} onChange={e=>setNewMovie(e.target.value)} />
                <button onClick={handleAddClick}>Add movie</button>
            </div>
        </React.StrictMode>
    )
}
export default FavoriteMovies