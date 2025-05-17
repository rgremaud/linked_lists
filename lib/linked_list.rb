class Linked_list
  attr_accessor :name

def initialize
  @head = nil
  @tail = nil
end

def append(data)
  @tail = Node.new
  @tail.value = data
end

def prepend(data)
  @head = Node.new
  @head.value = data
end
# size returns the total number of nodes in the list
def size
  count += 1
  p count
end
# head returns the first node in the list
def head
  return @head
end
# tail returns the last node in the list
def tail
  return @tail
end
# at(index) returns the node at the given index
# pop removes the last element from the list
# contains?(value) returns true if the passed in value is in the list and otherwise returns false.
# find(value) returns the index of the node containing value, or nil if not found.
# to_s represent your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> nil

end