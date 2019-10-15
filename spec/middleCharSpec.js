describe('MIDDLE CHARACTER', function(){
    it('describes getting returning one letter from 1 letter word', function(){
        var string = 'A'
        var result =  getMiddle(string)
        expect(result).toEqual("A")
    })
    it('describes returning 2 letetrs from 2 letter word', function(){
        var string = "of"
        var result = getMiddle(string)
        expect(result).toEqual("of")
    })
    it('describes getting single letter from odd number of letters', function(){
        var string = "testing"
        var result = getMiddle(string)
        expect(result).toEqual('t')
    })
    it('describes getting two middle letters from an even word bigger than 2', function(){
        var string = "test"
        var result = getMiddle(string)
        expect(result).toEqual("es")
    })
    it('describes getting two middle letters from a 6 letetr word', function(){
        var string = "middle"
        var result = getMiddle(string)
        expect(result).toEqual("dd")
    })
})



// get_middle("test") # => "es"
// get_middle("testing") # => "t"
// get_middle("middle") # => "dd"
// get_middle("A") # => "A"
// get_middle("of") # => "of"