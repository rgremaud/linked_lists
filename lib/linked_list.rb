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
    if @head.nil?
      "Current size is #{size}."
    elsif !@head.nil? && @head.next_node.nil?
      size += 1
      "Current size is #{size}."
    else
      size = 1
      current_node = @head
      loop do
        size += 1
        current_node = current_node.next_node
        break if current_node.next_node.nil?
      end
      "Current size is #{size}"
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
    if @head.nil?
      'List has no values'
    elsif index == 0
      "Current value at index value of #{index} is #{@head.value}"
    else
      index_count += 1
      current_node = @head.next_node
      loop do
        current_node = current_node.next_node
        index_count += 1
        break if index_count == index || current_node.next_node.nil?
      end
      "Current value at index value of #{index} is #{current_node.value}"
    end
  end

  def pop
    current_node = @head
    loop do
      current_node = current_node.next_node
      break if current_node.next_node == @tail
    end
    @tail = nil
    current_node.next_node = nil
    @tail = current_node
  end

  def contains?(value)
    current_node = @head
    value_check = nil
    return true if current_node.value == value

    while current_node.next_node != nil # rubocop:disable Style/NonNilCheck
      current_node = current_node.next_node
      return true if current_node.value == value

      value_check = false

    end
    value_check
  end

  def find(value)
    index = 0
    current_node = @head
    return "#{current_node.value} found at index of #{index}" if current_node.value == value

    loop do
      current_node = current_node.next_node
      index += 1
      break if [value, nil].include?(current_node.value)
    end
    return nil if current_node.value.nil?

    "#{current_node.value} found at index of #{index}"
  end

  def to_s
    string = ''
    current_node = @head
    until current_node.nil?
      string += "( #{current_node.value} ) -> "
      current_node = current_node.next_node
    end
    string += 'nil'
    string
  end
end
