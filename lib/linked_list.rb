class Linked_list
  attr_accessor :name

def initialize
  @head = nil
  @tail = nil
end

def append(data)
  if @head.nil?
    @tail = Node.new
    @tail.value = data
    @head = @tail
  else
    temp_node = Node.new
    temp_node.value = data
    temp_node.next_node = @tail
    @tail = temp_node
  end
end

def prepend(data)
  if @head.nil?
    @head = Node.new
    @head.value = data
    @tail = @head
  else
    temp_node = Node.new
    temp_node.value = data
    temp_node.next_node = @head
    @head = temp_node
  end
end

def size
  size = 0
  if @head == nil
    return "Current size is #{size}."
  elsif @head != nil && @head.next_node == nil
    size +=1 
    return "Current size is #{size}."
  else
    size = 1
    current_node = @head
    loop do
      size += 1
      current_node = current_node.next_node
    break if current_node.next_node == nil
    end
    return "Current size is #{size}"
  end
end

def head
  puts "Head of the list is #{@head.value}"
end

def tail
  puts "Tail of the list is #{@tail.value}"
end

def at(index) 
  index_count = 0
  if @head == nil
    return "List has no values"
  elsif index == 0
    return "Current value at index value of #{index} is #{@head.value}"
  else
    index_count += 1
    current_node = @head.next_node
    loop do
      current_node = current_node.next_node
      index_count += 1
    break if index_count == index || current_node.next_node == nil
    end
    return "Current value at index value of #{index} is #{current_node.value}"
  end
end
# pop removes the last element from the list
# contains?(value) returns true if the passed in value is in the list and otherwise returns false.
# find(value) returns the index of the node containing value, or nil if not found.
# to_s represent your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> nil
def print_list
    current_node = @head
    puts current_node.value
    while (current_node = current_node.next_node)
      puts current_node.value
    end
end

end