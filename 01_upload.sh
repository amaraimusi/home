#!/bin/sh
echo 'ソースコードを差分アップロードします。'

rsync -auvz ../home amaraimusi@amaraimusi.sakura.ne.jp:www
rsync -auvz index.html amaraimusi@amaraimusi.sakura.ne.jp:www


echo "------------ 送信完了"
cmd /k