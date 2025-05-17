require_relative 'lib/node'
require_relative 'lib/linked_list'

new_list = Linked_list.new

p new_list.name = "Gremaud Family"

p new_list.append("Howie")

p new_list.prepend("Whitney")

p new_list.head