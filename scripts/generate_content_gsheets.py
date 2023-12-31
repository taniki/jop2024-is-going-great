import pandas as pd

# +
key = '1cAZUB73b_XeFchMnOt61516GlSJRNuockpT_jkp82YI'

def gsheets_url(key, sheet):
    return f"https://docs.google.com/spreadsheets/d/{key}/gviz/tq?tqx=out:csv&sheet={sheet}"

events_url = gsheets_url(key, 'evenements')
links_url = gsheets_url(key, 'liens')

dest = "../src/_data/entries.json"

# +
events = (
    pd
    .read_csv(events_url)
    .assign(
        datetime = lambda df: pd.to_datetime(df.datetime)
    )
)

events

# +
links = (
    pd
    .read_csv(links_url)
)

links
# -

(
    events
    .assign(
        categories = lambda df: df.categories.str.split(',').apply(lambda l: [ x.strip() for x in l]),
        links = lambda df: df.apply(lambda r: links.query('evenement == @r.id'), axis=1)
    )
    .sort_values('datetime', ascending=False)
    .to_json(
        dest,
        orient='records',
        force_ascii=False,
        indent=2
    )
)


