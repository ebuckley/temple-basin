# temple basin prototype

A prototype *NEW* website for temple basin ski field

## scrape old site

```
wget \
     --recursive \
     --no-clobber \
     --page-requisites \
     --html-extension \
     --domains templebasin.co.nz \
     --no-parent \
         http://www.templebasin.co.nz
```