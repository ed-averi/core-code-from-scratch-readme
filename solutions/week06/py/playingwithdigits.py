#

def dig_pow(n, p):
    # your code
    # iterate through n
    # add n**p to a counter
    my_sum = 0
    for num in str(n):
        my_sum += int(num)**p
        p += 1

    # check if my_sum is divisible with n
    if my_sum % n == 0:
        #print(int(my_sum / n))
        return (int(my_sum / n))
    else:
        # print(-1)
        return(-1)
