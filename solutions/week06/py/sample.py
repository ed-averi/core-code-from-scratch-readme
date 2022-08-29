# Almost there, passed 206 and failed 1

def nb_year(p0, inc, new_comers, p, calls=1):
    pn = p0*(1+inc/100) + new_comers
    if pn >= p:
        return calls
    else:
        return nb_year(pn, inc, new_comers, p, calls+1)


print(nb_year(1500, 5, 100, 5000))
print(nb_year(1500000, 2.5, 10000, 2000000))
