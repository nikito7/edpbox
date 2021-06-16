# Usage

```yaml
  count: 1
  data_type: custom
  register_size: 4
  structure: ">L"
```

```yaml
  count: 1
  data_type: string
  register_size: 6
```

# Install

```js
vv=21.6.03
file=modbus-v${vv}.zip
url=https://github.com/nikito7/edpbox/raw/dev/modbus/${vv}/${file}
mkdir -p /config/custom_components/modbus/
rm -rf /config/custom_components/modbus/*
cd /config/custom_components/modbus/
pwd
ls -la
```

```js
cd /config/custom_components/modbus/
wget $url
unzip $file
rm $file
```

ha core restart