describe('doublylinkedlists', function() {
  var doublylinkedlists;

  beforeEach(function() {
    doublylinkedlists = doublylinkedlists();
  });

  it('should have a head and tail', function() {
    expect(doublylinkedlists).to.have.property('head');
    expect(doublylinkedlists).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(doublylinkedlists.addToTail).to.be.a('function');
    expect(doublylinkedlists.removeHead).to.be.a('function');
    expect(doublylinkedlists.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublylinkedlists.addToTail(4);
    expect(doublylinkedlists.tail.value).to.equal(4);
    doublylinkedlists.addToTail(5);
    expect(doublylinkedlists.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublylinkedlists.addToTail(4);
    doublylinkedlists.addToTail(5);
    expect(doublylinkedlists.head.value).to.equal(4);
    doublylinkedlists.removeHead();
    expect(doublylinkedlists.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublylinkedlists.addToTail(4);
    expect(doublylinkedlists.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublylinkedlists.addToTail(4);
    doublylinkedlists.addToTail(5);
    expect(doublylinkedlists.contains(4)).to.equal(true);
    expect(doublylinkedlists.contains(5)).to.equal(true);
    expect(doublylinkedlists.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublylinkedlists.addToTail(4);
    doublylinkedlists.addToTail(5);
    doublylinkedlists.removeHead();
    expect(doublylinkedlists.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of doublylinkedlists
});
