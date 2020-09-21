export const addNewFeature = feature => {
    return { type: 'ADD_FEATURE', payload: feature }
}

export const removeNewFeature = feature => {
    return { type: 'REMOVE_FEATURE', payload: feature}
}