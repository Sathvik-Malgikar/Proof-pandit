from scramblery import scramblery
import sys

scramblery.scrambleimage(sys.argv[1], x_block=10, y_block=10, scramble_type='classic',seed=None,write=True)
#note: seed is optional, none means random seed