require_relative 'lib/node'
require_relative 'lib/linked_list'

new_list = Linked_list.new

p new_list.name = "Gremaud Family"

new_list.prepend("Whitney")
new_list.prepend("Howie")
new_list.prepend("Theo")
new_list.prepend("Romain")
puts new_list


