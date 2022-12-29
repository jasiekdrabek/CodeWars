# The following are some examples of how this class is used:

# helper = PaginationHelper(['a','b','c','d','e','f'], 4)
# helper.page_count() # should == 2
# helper.item_count() # should == 6
# helper.page_item_count(0)  # should == 4
# helper.page_item_count(1) # last page - should == 2
# helper.page_item_count(2) # should == -1 since the page is invalid

# # page_index takes an item index and returns the page that it belongs on
# helper.page_index(5) # should == 1 (zero based index)
# helper.page_index(2) # should == 0
# helper.page_index(20) # should == -1
# helper.page_index(-10) # should == -1 because negative indexes are invalid

class PaginationHelper:

    # The constructor takes in an array of items and a integer indicating
    # how many items fit within a single page
    def __init__(self, collection, items_per_page):
        self.pages =[]
        self.length = len(collection)
        self.page_length = items_per_page
        for x in range (int(len(collection)/items_per_page) +1):
            items =[]
            for y in range(items_per_page):
                if x*items_per_page+y < len(collection) :
                    items.append(collection[x*items_per_page+y])
            self.pages.append(items) 
            
    # returns the number of items within the entire collection
    def item_count(self):
        return self.length

    # returns the number of pages
    def page_count(self):
        return len(self.pages)

    # returns the number of items on the current page. page_index is zero based
    # this method should return -1 for page_index values that are out of range
    def page_item_count(self, page_index):
        if 0 <= page_index < len(self.pages): 
            return len(self.pages[page_index])
        return -1

    # determines what page an item is on. Zero based indexes.
    # this method should return -1 for item_index values that are out of range
    def page_index(self, item_index):
        if 0 <= item_index < self.length:
            return int (item_index /self.page_length)
        return -1