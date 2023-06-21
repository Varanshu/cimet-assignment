import React from 'react'

export const useCapitalWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
}