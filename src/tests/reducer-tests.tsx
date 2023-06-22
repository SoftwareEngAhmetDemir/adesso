import Reducer from "../redux/reducers"

describe('REDUCER', () => {
   it('should return the initial state', () =>
     expect(Reducer(undefined, {
         type: "",
         payload: undefined
     })).toEqual({type:"",payload:undefined}));
let ob:any = {};
   it('should handle "SET_STATUS_VALUE" action', () => {
    return expect(Reducer(ob, { type: 'SET_STATUS_VALUE',payload: true })).
           toEqual({ status: true });
   });

   it('should handle "SET_COSTS_ACTIVE" action', () => {
    return expect(Reducer(ob, { type: 'SET_COSTS_ACTIVE',payload: [] })).
           toEqual({ costsActive: [] });
   });
//    it('should handle "NEWS_RECEIVED" action', () => {
//       const mockData = [{
//         "author": "Analysis by Stephen Collinson, CNN",
//         "title": "Mueller starts tzzle in most signimove yet",
//         "description": "Silent for so long"
//        }];
//      expect(Reducer({}, { type: "NEWS_RECEIVED", json: mockData }))
//        .toEqual({ news: mockData[0], loading: false })
//    })
})