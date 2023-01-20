export const state = () => ({
  youtube: [
    'https://www.youtube.com/embed/DwLMG67bVhg',
    'https://www.youtube.com/embed/WJRoGy4hf5I',
    'https://www.youtube.com/embed/2evs6DJIvDM',
    'https://www.youtube.com/embed/vp2KRMj3DXY',
    'https://www.youtube.com/embed/2vLmKG3suqs',
    'https://www.youtube.com/embed/1jNF1OOc1qc',
    'https://www.youtube.com/embed/lIQV_YXnLzQ',
    'https://www.youtube.com/embed/8GKIMtcZ5n0',
    'https://www.youtube.com/embed/5njL2RX7wPc',
    'https://www.youtube.com/embed/rA66mF6ywPk',
    'https://www.youtube.com/embed/6D9v7hM_AV8',
    'https://www.youtube.com/embed/-u2o_U_Z39U',
    'https://www.youtube.com/embed/IeQVe5_R65o',
    'https://www.youtube.com/embed/gDfl1yTNxJI',
    'https://www.youtube.com/embed/dSYi06ID5RU',
    'https://www.youtube.com/embed/kHhDk-K8bqM',
    'https://www.youtube.com/embed/OjyNaAwcLdo',
    'https://www.youtube.com/embed/mrmtu3bQ6u4',
    'https://www.youtube.com/embed/8K-WYmeh_Dk',
    'https://www.youtube.com/embed/_ZMJCRFzM9M',
  ],
  page_id: 0,
})

export const mutations = {
  changeid(state, val) {
    console.log('val :', val)
    state.page_id = val
    console.log('state.page_id :', state.page_id)
  },
}
